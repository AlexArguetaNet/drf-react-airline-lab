from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer

# View to register a new user
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            serialized_user.save()
            return Response(serialized_user.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized_user.errors, status=status.HTTP_400_BAD_REQUEST)

# View to handle login request
class LoginView(TokenObtainPairView):
    permission_classes = [AllowAny]

    def post(self, request):
        res = super().post(request) # Get the response

        if res.status_code == status.HTTP_200_OK:
            refresh_token_value = res.data["refresh"]

            # Delete refresh token from the response
            del res.data["refresh"]

            # Create a cookie with the refresh token
            res.set_cookie(
                key="refresh_token",
                value=refresh_token_value,
                httponly=True,
                secure=True
            )

            return res

        else:
            return Response({"err": "DRF: Error logging in"}, status=status.HTTP_400_BAD_REQUEST)


# View that refreshes the access token
class RefreshTokenView(TokenRefreshView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):

        # Get the refresh token from the cookie
        refresh_token_value = request.COOKIES.get("refresh_token")
        if refresh_token_value:
            request.data["refresh"] = refresh_token_value

        try:
            return super().post(request, *args, **kwargs)
        except InvalidToken as e:
            return Response({"err": f"DRF: {e}"})
        except TokenError as e:
            return Response({"err": f"DRF: {e}"})

# View that gets the current user's username and email
class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        curr_user = request.user
        return Response({
            "username": curr_user.username,
            "email": curr_user.email
        })
    
# View to handle logout request
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        refresh_token_value = request.COOKIES.get("refresh_token")
        if refresh_token_value:
            try:
                token = RefreshToken(refresh_token_value)
                token.blacklist()
            except TokenError:
                pass

        res = Response({"msg": "Logged out"}, status=status.HTTP_205_RESET_CONTENT)

        res.delete_cookie("refresh_token")

        return res