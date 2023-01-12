import qrcode
b=input("enter site")
a=input("enter name")
n
img= qrcode.make(f"https://www.{b}.com/{a}/")
img.save(f"{a}.jpg")



#https://vasu07017.github.io/{text.get()}/
#https://github.com/vasu07017/database/blob/main/{text.get()}.html