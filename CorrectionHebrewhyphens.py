import string, pyperclip
s=input("Enter new content")
l1=list(s)
s1=string.ascii_letters
print(s1)
def ifIsEnglisLetter(s):
    for i in s1:
        if s==i:
            return True
    return False

a, b, c = '-', '–', '־'
for i, v in enumerate(l1):
    if a in v:
        if l1[i-1]==' ' and l1[i+1]==' ':
            l1[i] = v.replace(a, b)
        elif ifIsEnglisLetter(l1[i-1]) and ifIsEnglisLetter(l1[i+1]):
            l1[i] = v.replace(a, a)
        elif '' not in l1[i-1:i+1]:
            l1[i] = v.replace(a, c)

#l1.reverse() #if you want to see the hebrew right
s1=''.join(l1)
pyperclip.copy(s1)
pyperclip.paste()
print(s1)
