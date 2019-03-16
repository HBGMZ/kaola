import hashlib
import random
from linecache import cache

import time
from django.shortcuts import render, redirect

# Create your views here.
from ybw.models import Swiper, Swiper1, Detail, User, SShop, MShop, CShop, Cart


def index(request):
    # 获取session
    username = request.session.get('username')
    # 获取token
    token=request.session.get('token')
    userid = cache.get(token)

    # 获取轮播数据
    swripers = Swiper.objects.all()
    # 获取导航图片
    swripers1 = Swiper1.objects.all()
    # 商品图片
    shops = SShop.objects.all()
    # 商品图片
    mshops = MShop.objects.all()
    # 商品图片
    cshops = CShop.objects.all()
    response_str ={
        'swipers':swripers,
        'swipers1':swripers1,
        'shops':shops,
        'mshops':mshops,
        'cshops':cshops,
        'username':username,
    }
    return render(request,'kaolaLogin.html',context=response_str)

# def Shop(request):
#     shops = SShop.objects.all()
#     return  render(request,'Shop.html',context={'shops':shops})


def SHOP_Cart(requesrt):
    return render(requesrt,'SHOP_Cart.html')


def detail(request,id1):
    details = Detail.objects.get(pk=id1)
    response_det={
        'details':details,
    }
    return render(request,'Shop.html',context=response_det)


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return  md5.hexdigest()


def generate_token():
    temp = str(time.time()) + str(random.random)
    md5 = hashlib.md5()
    md5.update(temp.encode('utf-8'))
    return md5.hexdigest()


# def register(request):
#     if request.method == 'GET':
#         return render(request,'register.html')
#     elif request.method == 'POST':
#         # 获取数据
#         username = request.POST.get('username')
#         password = generate_password(request.POST.get('password'))
#         code = request.POST.get('code')
#
#         # 写入数据库
#         user = User()
#         user.username = username
#         user.password = password
#         user.code = code
#         user.save()
#
#         # 状态保持
#         token = generate_token()
#         # cache.set(token,user.id,60*60)
#         request.session['token'] = token
#
#         # request.session['token'] = token
#         return  redirect('ybw:index')


def  register(request):
    if request.method == 'GET':
        return render(request,'register.html')
    elif request.method == 'POST':
        user = User()
        user.username = request.POST.get('username')
        user.password = request.POST.get('password')
        user.code = request.POST.get('code')
        user.save()

        # 状态保持
        response = redirect('app:kaolaIndex')
        request.session['username'] = user.username

        # 过期时间
        # request.session.get_expiry(10)
        return response

def land(request):
    if  request.method == 'GET':
        return  render(request,'kaolaLogin.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = User.objects.filter(username=username)
        if user.exists():
            user = user.first()
            if user.password == generate_password(password):   #验证通过
                token = generate_token()

                # 状态保持
                # cache.set(token,user.id,60*60)
                request.session['token'] = token
            else:
                return render(request,'skaolaLogin.html',context={'ps_err':'密码错误'})
        else:
            return render(request,'kaolaLogin.html',context={'user_err':'用户不存在'})

        return  render(request,'kaolaIndex.html')

def logout(request):
    request.session.flush()
    return redirect('app:kaolaIndex')


def  Shop(request):
    return render(request,'detailcopy.html')


def cart(request):


        return render(request,'shopCarKaola.html')