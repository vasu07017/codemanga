import qrcode
from tkinter import *
from tkinter import messagebox
from PIL import ImageTk
import time

wn = Tk()
wn.title('AKATSUKI')
wn.geometry('700x500')
wn.config(bg='SteelBlue3')

def generateCode_attendance():
    qr = qrcode.QRCode(version = 5,
                   box_size = 10,
                   border = 5)
    qr.add_data(f"https://attendance.code.blog/")
    qr.make(fit = True)
    img = qr.make_image()
    img.save(f"{e.get()}.png")

    messagebox.showinfo("Akatsuki QR Code Generator","QR Code is saved successfully!")
    


headingFrame = Frame(wn,bg="azure",bd=5)
headingFrame.place(relx=0.15,rely=0.05,relwidth=0.7,relheight=0.1)
headingLabel = Label(headingFrame, text="AKATSUKI", bg='red', font=('Times',20,'italic'))
headingLabel.place(relx=0,rely=0, relwidth=1, relheight=1)


lable11 = Label(wn,text="enter the date: ",bg="SteelBlue3",fg='azure',font=('Courier',13,'bold'))
lable11.place(relx=0.05,rely=0.2, relheight=0.08)

e=Entry(wn,text="enter date",)
e.place(relx=0.05,rely=0.30, relwidth=0.7, relheight=0.07)


button = Button(wn, text='Generate Code for attendance',font=('Courier',15,'normal'),command=generateCode_attendance)
button.place(relx=0.10,rely=0.45, relwidth=0.7, relheight=0.07)

wn.mainloop()