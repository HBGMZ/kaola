from django.db import models

# Create your models here.

# 轮播模型
class Swiper(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10)

    class Meta:
        db_table = 'swiper'


class Swiper1(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10)

    class Meta:
        db_table = 'swiper1'

class  Detail(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=100)
    shop = models.CharField(max_length=40)
    price = models.CharField(max_length=40)
    old_price = models.CharField(max_length=40)
    discount = models.CharField(max_length=20)
    cart= models.CharField(max_length=20)

    class  Meta:
        db_table = 'detail'



class  SShop(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=100)
    shop = models.CharField(max_length=40)
    price = models.CharField(max_length=40)
    old_price = models.CharField(max_length=40)
    discount = models.CharField(max_length=20)
    cart= models.CharField(max_length=200)

    class  Meta:
        db_table = 'wShop'



class  MShop(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=100)
    shop = models.CharField(max_length=40)
    price = models.CharField(max_length=40)
    old_price = models.CharField(max_length=40)
    discount = models.CharField(max_length=20)
    cart= models.CharField(max_length=200)

    class  Meta:
        db_table = 'mShop'



class  CShop(models.Model):
    id = models.IntegerField(primary_key=True)
    img = models.CharField(max_length=100)
    shop = models.CharField(max_length=40)
    price = models.CharField(max_length=40)
    old_price = models.CharField(max_length=40)
    discount = models.CharField(max_length=20)
    cart= models.CharField(max_length=200)

    class  Meta:
        db_table = 'cShop'






class User(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=255)
    code = models.CharField(max_length=100)   #验证码

    class  Meta:
        db_table = 'User'


# 商品模型
class Goods(models.Model):
    productid = models.CharField(max_length=200)
    productimg = models.CharField(max_length=100)
    productname = models.CharField(max_length=100)
    productlongname = models.CharField(max_length=256)
    isxf = models.IntegerField()
    pmdesc = models.IntegerField()
    specifics = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6,decimal_places=2)
    marketprice = models.DecimalField(max_digits=6, decimal_places=2)
    categoryid = models.IntegerField()
    childcid = models.IntegerField()
    childcidname = models.CharField(max_length=100)
    dealerid = models.CharField(max_length=10)
    storenums = models.IntegerField()
    productnum = models.IntegerField()


class  Meta:
    db_table = 'kaola_goods'


class  Cart(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(Goods)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)
    isdelete = models.BooleanField(default=False)

    class  Meta:
        db_table = 'Cart'