from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$',views.kaolaIndex,name='kaolaIndex'),
    url(r'^detail/(\d+)/$',views.detail,name='detail'),
    url(r'^detailcopy/$',views.detailcopy,name='detailcopy'),
    url(r'^shopCarkaola/$',views.shopCarkaola,name='shopCarKaola'),
    url(r'^kaolaLogin/$',views.kaolaLogin,name='kaolaLogin'),
    url(r'^register/$',views.register,name='register'),
    url(r'^logout/$',views.logout,name='logout'),
    url(r'^cart/$',views.cart,name='cart'),
