from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$',views.index,name='kaolaIndex'),
    url(r'^detail/(\d+)/$',views.detail,name='detail'),
    url(r'^Shop/$',views.Shop,name='detailcopy'),
    url(r'^SHOP_Cart/$',views.SHOP_Cart,name='shopCarKaola'),
    url(r'^land/$',views.land,name='kaolaLogin'),
    url(r'^register/$',views.register,name='register'),
    url(r'^logout/$',views.logout,name='logout'),
    url(r'^cart/$',views.cart,name='cart'),
