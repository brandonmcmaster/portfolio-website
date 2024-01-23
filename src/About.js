import React from 'react';

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>

        <p className="mb-4">Hey there! I'm Brandon McMaster, a musician with over 25 years of experience in the industry, known for my role in founding and touring with the band Sleeping With Sirens. We crafted an album that continues to captivate millions of listeners, and my love for music remains as strong as ever.</p>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUYGBgaHBkaGhoaHBgcHBwYHBocGhkcGhwhIS4lHB4rIRwcJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjEhJSs0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PTQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEcQAAIBAgQCBgYGCAUDBAMAAAECEQADBBIhMQVBBiJRYXGBEzKRobHBI0JScoLRFmKSssLS4fAUFSQz8TRDogdTY4NUs8P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgMAAgIDAQAAAAAAAAABAhEhMVESQQNhInGBMv/aAAwDAQACEQMRAD8A52zfgZWGZfev3T8tvjVhQRDKdNII0nuI5HuPvFUExGuW6pR/tFSFP3ljq+IEdo51ZQsh7J5bqw5a7Ed48q2017uN9IgmMyPZYx2ekXWOXOtviK9Sd4a23sdT8qpcKspiUNpAttzE9UkaEEHTU7c61+N4VkR0OpyEiNZ0JEd8jaud7RbtW1ZgHYKsgknQAAg7+VO4/ijkd1+qDlHLKBEEbEROnfVfiz5rfUBLsrLpzAU5j94Lr3z7ZrtsOpXky6+BH9ayGoQRoZEAgmJII1mBE5g3upeKWC6Qu4IMdvbHf+VXTw3IpyZYKrop0zAQSB2HTbsFMvqypmjraQJIjUSz88gEkjnBpsc8nDLp2Q7TrA07wTpUp4Y49dkQfrOKpcZxL3GVgz6pyJBIzvBIGkkQfOqKcLuMdLbnvyt8SK2Ndlw6+tiU8EBb4VE2Owq7C658lHv1qK10fvH6gX7xUfM1ZtdHyTBuJO0KSxn3U49FVuMoPUwy+Nxi3uqB+PX/AKuRB+qg+c1dv28NbLIXLOp2QgSmgJMrlmdhJ5dtOsLgymcI7CM0FmLZZ9Yqp0HeaceCPo9irz33zsXU2xJMaMHOUAAcwzeyqXRX/ecfqfxitXAcSRXYKiIhH1DmYsDuwIBIgnaYg1j9FWBvvB3R/wB9anoqlD/mX4z/APrNV+nY+kT7h/eNW3j/ADH8f/8AOq3T0fSJ9w/vGtTuf0L/AEs/6YffT4GoOjw/0h/+z51P0uP+mX76fA1V4JdVMESzBRNwakDWSAB31J0MjoqPpG+5/EtMx4/1o+/b+CVN0TQ53aDGSJgxOYaTzPdU1uyzYz0pRlQMpzOpTXLlX1oJ60Vqqs9IMEXQMTlVA7HnOg0AnTaqNvEZcJ1SrEAgidsx598HatnpDciw/gB7YHzrmsCP9Nd8fgBSdC/wNfoh4t+9/StaD21l8FH0K9+b981qQe731m9i3xHhSX8uYsMsxBHOORB7K5+/hblh2UI72h2qdiASVYCFPu01FdgNqR0DSDsRHuipMrEcThuMOroLbMh1zkHeSYgcoEe0+XTdFul9z0gt33zAnqsYUg66EjkdKyOM8KtW1R0DKc6jQlhqec7VL0ZwyZ7qOiu2vXlCqpEmQxnfeFO1burNjseKcUD31hCfRoz/AEfrZmIQMfKde8VYF5mRSqpJIIBLTB1nPpP3SNdBXNdHLV1ocplDRkuZgCVVApXJ9nRjrvPfNbrX2RMhCKEyDRiSeqsaETpqNzGh51zyg0vRui5oz9wa5Ek6jLnK9ugHsqvjeIMtpnyr1VBJIOgifVJ62wkFhWniAchgkHrDTlvqO+udyhGIuX1+k6ptuFAVSo0C+swJyjUjcCNak5VmY/i2MHWtBcmVMxRAYfIucZTqoB7Rtrzqk78RdA/pHKsJAQqpjkcog691dZbTKI7+4cgOXhHlUtwTHfV+WvpHEng95kV7t1+sfUYvnyjmJ2Pcf6V0Fi6mHslgjxELkVsqkxJL7ydy3Ok4txm1aJYoXZDkQMCAdszzGo5R3Vgt0r9MwF0EJtlQwJ7RzHhS7yahMPwm9eJuOruhOigkOynWJImNvlWhcvrZWUtejKzm1Y5iBqZJhiAQTOu+1XeHcZthGKLkgRBhhJ0WT94Dcc99KyOK8VW9beQQ4ykiZBbrBpHIjt5ggGaTdo5nidxS2ZC3aZOs90Af0q30Z4lkvQWCl1KK7AsquxBBYSJEiN+dZmUkAaRJE+w/OqbmNj/eh8jXbXGkd3huGhL/AKa9i7bEHNplUlojWSQAByqrj8FhXfPcxxfXVSyHT7IKjqjwFYOA4LexC57aKVmCSyiDz0matt0Uvj1nsp95z/LWda+xp8RucPuNme4zHbRrpAHYBsB4U7/O8CqBAmZVEAZJ/erFbgSL6+Msjw63zFJ/l2EX1sXP3EP9amp7Uan6VWUGVLTAdnUUewE1m8R6SG4jILYUMInMSRrOmg7KjKYBfr338gPkKr4q/hisJZcGR1i5mJE6SRqJHnVknitPiWP9JgwxPWJVW+8DJ9sT51RwwjBue1/5B+dWePsgsWhb0QnMPIHfv1176idYwQ72n/zP5UnQu8IH0Kf3uxNaGnZVLhQ+jTwU/GrVYo3QdP776cTqKYG0P986d2VkYfSl29CMs+uuaByAYz3aga1zdpLmc5A5JZ1XKDJaDKzz0Oo7DXT9JbjLYfKSJIBjmrGGB7ta5lGuhybeeQxIKZpBZRMRsSAK64dI2cBwnEsjq6XY6mVSSCVXMSqyeqJCAnQAHyrTwOFxVpWuXVBTQi2crIhlRIBOnVlQUk676VzeXGOdsSfK7tvU2H4diQwd7d3KurFp0AGpMmlg9ZS8WshpkkSSIGvPaK5IIha4l27aCOQQrtDKwlZA3aTB0IIjQidem4ec2GU/q1wuL4DdxNx2t5Or1WzNHaRsDO5rlj2rsWIAALawImZY7dkTqTUePvZEz9gnnTMPbcIoaGdV65XUHKNSCQOyqHHL4fCsymQUOvnBppI4vjfEHvsgZl7FRZIGvafmavYDo5IDM0c6wsM0XUP6w/Ku/wAPtWs8rjxHTGbZGL4SqK2VjMTqd5n8q5cXCTvvv49vhIrucemhP6je7/mvP3MMPI+0Cn47vsymk+IxAFtUG5d3J8YUDwgT51nM1Od5pkV1YWMObh6qZ4OsLm1juG9WE4TiG2sXD4ow+Ip+F4xeSGVlBRSo6q6B2zMQIidAJ7KkfpJiTveI8Ag+Aqc/QROjuJP/AGiPFkH8VTp0WxJ3CDxb8gaz34xfbe+/k5HwpoxGIb691vAuafyGuvRO7zdB4Zj8hSX+jOQKWuiC6KYWIDGNye0gedZfoMS31Lx8npDw2/Im24kgAsCNTtqdqnPo0Ok6KrW0UQqoYHiY89qkx6Rg08E9p1qt0nDC4gYywRcx7WlpNXuOLlwyDsyD2L/SngtcMH0afdT4Cp/ZUeAEIn3V9yipZ7vjWRsLTgdKjB1PnTp0rAocZuslq4UiYjt0YhW9xNctY4xdsFhbfKGykyqnXKO2a6jjaFrTgbnLHjIge2uWwHF3sZsioc625zgnYHbUdtdcehN+kmKba83kqfJaktcRxbkBnvFSYYQ5BB3kAaipP0vxP/xj8P8AWk/TDE83SOcIu3PenPiO1wPED6BQrNoFnQDdmXYRzXnWfjOHXnJ+lVZAOzcxOutScHHVj9Uj9m4zD9+rHEbDoAwY6jl2TXLqqbwfir2bbrdcO2W6qsOY9GCs98kjyrnejGLzYW9aOuQNA55XQ6DzDe2o8fjCuvYRI7tQflVHohdy3yvJkI81II92aumv4jNs3crqyw2UmPDcfGuownGrmhdFynmp19lUMVwI2LyNvadyB+qYkK3yPOKv3uDpJeTl3yzpPhUyuN7bx3rhZ4rjfogdet6veDofca424xJ2+qPcK6vjCSLadiT58q57F4Ah5WSu/eAd9O7ap+PUi5TbMOmlIpq9icJsV1kDaqUQddYMGusu3OzTTwOMtWnZvRC6hWAjxoZEEyCOR9taH6TIPVwlpfZ8lqtwvD4N0m/dZGzGFUn1dN+qdZmrRs8MH/cc/t/Jazdb6oYeltz6tq2vk35ioX6VYk7FF8F/Mmp2fho2R2/b+bCmniOBX1cMT96PmxpqeCi/H8Sf+6R4BB8qjscQxFx1VbrsxIgZjEgzqNo0q/8A59ZX1MJbHecvyWhOkjllAsoBmGig5uwgcpIMbU/wV+lJ+mH3F9sttVzpOYtIO8e5T+dUekHWxJH3B7f+atdKDLIv3v4RTwa2GEKo7v4aX0v96VHdvqgk6b/lrAqj/mK/3m/lrOh006+z5UTpVW9iCjqrI/WICuIKMSNIadCewwT2U1eI2+sC+XLGYMCmWTpOYCJis6FjFEwSNwAw+8pzD3gVyVnGJYuP9ElxSFyZ40XUqRodwRXVLiEaCHU+DA/CuVw2IsoS1y16QCbYExADEofZI8q6Yotr0mj1cNYH4f8AipF6X3Btasj8J/mqNOMYb6uBQ+w/wGpLfHrR9XAWzG8AH2wlX/Bo8I43bd0XZnZpGoALgaDzB91dJxK84tLkyl9RBImPM1yFjpMp9TAWyR9kTHsTSp06WOwJGBRo0JCs0HsJyb1zuN3xFQphc936ZVKQ7uC8AhAXaChmYBPkaxuFsFxalYy52gCSArSAATqQAeetbGPxS3G6yrZJ6t5gYVFIH0Y5ByEM9g0OulYlu7kvpmIAtwAYiUg5XAjWQZmtzoeivDWWB/PsrDu3lCdcgAb+RrT9OVw5co2VoymIOuxKmCB41y2IKXLkMMpM5JgztOnbOvnXP47axulni2OtOyBDmJWBHjpvV7EWQwB56aislsOhOUshYbLkhp8QRpU9pfRAln0IiCTHdEyaWeOkqHFgd2mprmHPWPia3rr5ySo6vb21lXsGwTP9XNl866Y8OeReGYH0z5A6I3IPm63gQInurZPRNh61+2PbXNxTiVyxlEz60nUdkbVbL9VlvHo9bX1sXbH7P89J/leDHrYqfux8gaZxjhaWEt9WXcHOSW0YBfVAIG5O9WsBwZBhjcdQzlGdZJgDKSukwe3Xtqb43sV/8Pw8b3bjeR/kqSxfwKOrIHzBhBaYE6SZPKZ25VH0bwCXM7uoaCAFMwOZMe7yNUOFYcXbyhogSSAAAQvKAKa/Ys8Z/wCqXxt/EU/pEOugBgwTJJ010322qDiuuJj9ZB+7T+kKlrwUAk5RoNeZpPoQrxBU1Uekf7byVB/UT5nXuFS/pHiPtL+wtMXBWU/3Lv4E6x8yJA8Kfnwf2Ln9/iq8eC+Ol13ZkRh4MPmanHS5SZfDgmCJzA9U7jVdu6qNzi9knrYS3+E5fgtRHG4Q74Zh4XGqfGeCzd4vhWAnDFSpzKVZQVMz1e6dcu1U+H4oJfDLorswjmFZjlnlpI9lK9/BEaWbintzzr5tWYA0AjkJnsjmeyrIOzTCKl8XF0zhlYdp0bN7tamsYQJeZ109IhJHerLqPHNTXbrWm7WI9ttqnuGHQ/fHun+GsISxhFS6zrp6QagfaBGo7zNMuJDvbsmHZs11xtaMQVXkbpjX7Gv1vVhv4p3f0dolWHr3BugI2X/5CP2R3+rbwlpUhEELB08Due/WnQoPxSyh9CMOCuHBeCQQ5lJJketqTrOtW8N0tS8cn+GLDSczKQADImV7R7qz8VikW66Lh0LBXuM2pZ5UnI3cSQI8Ka93IpuOlu0DEJbESfgW/uaupRpY/FPebrHbYDZR3d/fXM3rTXcTkTdR1fFRPtJq6vGbREKSCd8wjy7B7ar9Gbs41D9ot+fyq9QIl3EBy2Qs22YCeevL3VYHDrt0hrpyrvl5+fZXoF/Aoxn0aknc7E+JG9Jh8EgMi2gPbEn2mTXO5NTKOaw/BmdYUZUG7fy/aNV+lNhbdgW1GiLm/FmRfac7H2127iSBPefLb36/hrgOm+K6zIObKD3ZJY+3On7NMecjLLbkaQ0tNmu6Lt/iLuiI+uQnKx3ggCD27b11OGf/AEX/ANTe5WFcSK0cPxd0ttbMMhVlHIrII0PMa7Gs2eDT6InW7+D+Os3gP/UJ+L901o9Ev+5+D+KqPR4fTg9isfdHzqeh2NX/AFgH66fw03pD/vfhX4mpMd/1a/et/IUzjdwrfBWJyrGgOsnkaT6Edngt54IUAHYsY92/uqx+jd37Sf8Al+VUbmNvnd3PgSPhTPS3vtXPa9Xkbjpw/wC1c/8AL8qiK8P7bvv/ACp36MEeteQe3+lMPBLK+ti08sv89Tc9opXcWgzoiAISADC58gzH1iD1iSJPYI0qiWGoGo5Tp7uVWOJ4e2jAW7mcRqY2M/8AFVQp7P7O1ag7Rbua3Zf9ZD+0I+dQcUxRZ1tIevMz9nQgnyB9sUY5xbsATGXIF/AQR8DRw/D5EzsOvcYamJUSNfFQw/E4PKs/tFzDolsKinY66MSWI1LEDRjvrFWy4kaP2bIOznn7uyomQKoAEAEe/wD5oc7eP9KyM7iWMto+UWgHMM1wkElfVC7CB1RpWZjkF0jMxkAweQ25U3jzj0oI3yCfGTHy9tQWnzeH5f1reM4Uy1w8T128AOY5GeVbfAsEBftMu8uNO3I8ViW3zXTNdVwFgt+yTt6RB7WCn96mXSO8ZIpQlTYtesveAagvnSO3Ty5+75V56qJNde3bw5fn515J0ov58Ve7A7KPLqn4e6vWblwLJJgASfAamvFcTeLu7nQuzOfFiW+ddPxzmiGiiiuwKKKDQb3Ri6B6QdwbyEz8R7ar9Gh9Ke5D8VqhgcRkee0Mp8GEfGD5VqdGF67nsUD2n+lYv2IuItOKX7yfEUcYcC+Cy5wFGhJHM7kUmM1xQj7afKjiDJ/iOuzBQFkqJP8Aftqi3b6RxobQAGkBvllqX9JE/wDbb9oU63YwdwALln7zK3vIJqb/ACGx2H9o/nU4GInBMQ21pvOF+JFWk6MXvrFEHe35CPfVV+L4htPSN4LA+ApV4fibu6Oe9yR+8achvEOHi1li4rkzOWOr2fWJPPkKoBZ0GpOw5zyArTxfBXtIXdk0jqgkkyQOzvqnhll0ytDSDP2WBMfAe2rLwNnHvncKTogJOo1YcuyS0D8JradwyFgQdAQRsQLjEEHwj2CubweCa6j3c5DKe/WAGOoII3qxwPGFke2fq2yVgcpaZPiw99SxHR3h1Cewg++kujqz4fGi+4NsnuP50rsMh7xWRyXHv90+CjzgGqlp40qzxw/St4L7gPzrNDV0nSrFp4cHs+HOulw+ICsjj6ro8+DK3yrllMMK1cPd+jdeaiV+6fyNKPZ8WNu6R7DHyqnuSezQfxe/T8NTvczJI30jxYAj3mq90ZV05f8AFecYfTLEZMNcPNlyD8ZCn3EmvJzXof8A6k3Yt2k7XLeSLH8deeGu2E4CUUUGtgNFBooErY4HdCByeeQfvVj0+28T5VLNi/afNiQf1vgKW6gfEEF1Uaat4AQO01Qtt1wZO/LepXVc+skc5Op07aaGxiOjoOqOfBtfePyNVf0ev/qe0/lSYe7ct/7TyPsNBHl/SKsf53iP/aX9lvzqciwnHz6tjDgeA18cqj51TucRxNxC+fKo0heqTy0gTz7avphAGdjqWj4D5zUK2woyjYT+dSaGZibOQgt15AktO/OCDNPS/aBQhIIYFj1zpOoEuZ58qt4yCh0BgEjxA0p2FTDeja4w6xDdSdA0bKN+8GdKv0JujeMw1tc11znkwpzlF21AAiT21oYDiGCtEk3WcmYzByFXYKqxA00nf4VzODewoIuo7nQgowECNQQe/nVlbuC527/7SUsRu4DiuDtA5rj3GIIl1cgKdIVYhdOe9R4Hi+EtqQzvcZgVLMr6KdIURC+I1rI9JgfsX/alRYh8JlbIl7NHVzFYnvipqfsVMQ8sTJbXciCRtMctI0qvFONymE1tT51FWnJy5h2FT4MPziqg2q5bPUcd1B7PwtwyIOxF9uo+FLjR1G8Ky+j928AqugzZQpHYoMgz+I1s3l3ry72Waea/+ouJD3bSjlbzftsR/AK441udLLk4lwfqBU8gJ/irCr0Y/wDMBQaKDWgUUUUCUopDRQOU60obWaZSigtpc+dO9Ie2qitTs9QdGcSCRB3B9s1Wd/nVdDBXWns21TWgXDK+R94qimMOZ2bKcyFII7goiNiIB8qtq2lZa6b/ANnv7qolw7qs5lzSCN4jbrDvrWTHYSBmwzzAnK7RPOOtUVvitqAGwtsnSSCRJ5mI0oscRsCc2GBliR1zoDqF74qUSnGYH/8AHuftn+eqPELthsvoUdN82cz4Rqe+rrY/CHfDMPB2/OnYThyYtvR4a3kcSxa47Zcg0jTMZJI5VOhm4HBPdcIis7GYVe7c9w766rD/APp9ca1ma4EukZhbKyAOQZgd/Aad9bHRXh9vAkre/wB51GZtcqrJhA23KSeZ8BXTiwRJLlw3qyYK8+3Xxrnl+S/TUx9ecdHuj5W+RiUBCbKYZXYzB00ZRG3eJ7Kg4lg0/wAU1u3lXM6L6NRooYJ7NSdB7q7VJR2EAvByk7N2T39tcl0NsvcxyFwWcM73Ad8yzM9kMRVxyttq5SSaeo4DDZQWO5AHkKbdrQuOMsnSs3FGJbkNawy8U47ez4i63a7+wMQPcBWdT7j5iWPPWmV6EFJSk0lUFFEUUBSUtJQLRRRQLRRRQaGcTIECdJ1MeNSFvjUOJtFGKkgkHcGRTS/wqCcNpWc41Piatht6qXfWPjVGlheKqihTYtPGksBJ8TFOt8UQMxOGtkMQQPswAIGm2k+dMwPEbiJlVLbBZPWAJ1JPbrzpycVYszm1abRQQVECC0ECdzOvgKzoSNxKwd8Kvk5/KmpxREJa1ba28EBg5O/aCdqG4mpGY4a1G0gRr7KgfFoRP+HUDtBNNDZwPFs/Wdzm7zWk/SB0UDPCrBGw22k7kdxrirl4BpRSgjaT561bs3LwQMrSDOmZuR5iazcY3Mq9K4DxvD4tScypcWc6NA0H11k6r8NjyrO6DXw+NxVxQAswpBkQXIkHnmyg1xZs37qTlDDs0J0PfW10P/xiOy2rQhozlxlVQJgkgiB4A1n4yS6qW2vRuM3WZeo6hhJ1JCxGpJAMVw/DOkV4Mwcq6sdQQdBEaaaiO6uu4w6egYPkVyomNpENEnUiRXC3Ls6KB7qxNVvGanLJ4tatC6wtgBDDAAaLO4HdM1mXLVXOMWyjqZ3HwP8AWqHpyO+vRj055domWKSnM002qgoopKAopKKBaKSloFopKWgsuhWQwIPYRBps7Ur3GYyxJJ5mpMPhHdZUgR286Aw6F2CLGY7SfjTbtrJchxtqcp7tIq/fxSW1UBFLgeOU9s71m3XYurXATMMeRKzy7NjWQ63cmNAIUDQbxzPaaFEMewimrdJygx1QQNOW+p509jr5e6qGBYkVHGkVITrTGNURmpLN9k9U+XKmNvSVBu2eMKwgqEftEQe41oWekF236uhPfofEVyVdb0Xw5yekCK8SCCBMTrFYyki/Ks58U1xizlnO++lKt+JMDu7q6jE8DS8RcQMyxDKmXOO5hHyqliuF28hTKyPEAkEkn2yDU3FmTk8feDEa7VTpWWDHZpSV0jNuxSUtFUJSUtFAlFLRQFFFJQLRRS0GrZRncO6qU20I07OetR4nGKsraAE7kbeQ+dUldz1FJg8qmMW+wv7l/rU0FRVTrP1n3C/Nqivu7EO8mfeAeXdTkWOu+vYOZ/pUd92aGOx0Hl2UDjcYhQfVEhdO0knXnvQSZikLMVE+qCcvZqZPxpA5DAjcRVDmFMatzDX0urlcANET31j4myUYqeVZlEFBooNaBXb9D75tp1llG5d/OPdXEgd9ej8GsAWUU7wJrGd4GzhRhWYsHZGHLNl9hiadxG9buIUe4xSIgKWcj7528qiwvClcHICWB1JhcvcNd/Oro4M31yEUbkkEx5ae+udSPKek1pVxLlAVRsrKDvBEGfxBjWVXYdO8KOpcRHVASmdplyesDry6rbVx9dcbwoooorQKSg0UBRRRQFFFFAUtJSzQSJfZZjsiedPS2EGZ9+Q+ZqJHCmYnsp4GbrudPj3CoAdbrvt8e4U26xbrHbYUTmMnRRSXHJ7hyFUAU5QeWw+cUpB7KS23adINW7WJRVYakspXTxB17tKgjsvBFW8TFxZ+sKomIgEeNT27wUAD21LBTZSKbV3EXEO1VWiqBBJFd3h74CKpJUgAA77cq5HheEZ7iiu8PDuqBlA03H5VnKxEmE4pcTKCwyg7g6eY3nyrUfiob1bkx2n84+Fc0+CarNrhoyZ7txkXkACSfAfOs2REXSbFXcTZdQsogzlvudbSO4H2157XoWKxDuBato6WRoZnO/bPYtcDibJR2Q7qxX2GJrWKxHSUUVtRSUtJQLRSUUC0UlLQFLSUUDlInWnElzJ0A91MAFOYzoNqBSc3coprt7OVDtyG3xppoFB/vagxSKacW7qA0ogdtE91JpQORROp0rQt8OkZgR3Cs4GrSYkgaE+fyqUaVu0yQyMVccxPnTk6U4pCeup5dZB8orK/xjTO/tqG9cza1Pj6Npelt/mts+CkH2ya0LPTy8iZURF7I/4rkKKfGI6HE9McU/11A7hHvG9YOIvM7F2MsxkmANfAUyirJICiiiqopKWkoCiiigKKKKBaKKKAinsY0HnUdLQAoNLSGgBTtaZS0C0TThQaBlBpaBQJFFONNoCkoooCiiigWiikoCiiigKKKKAooooCiiig/9k=" alt="Brandon McMaster" className="mx-auto mb-4 max-w-md" />

        <p className="mb-4">But life has a way of leading us down unexpected paths, and I've discovered a new passion in the world of technology. I recently graduated from a full-stack .NET bootcamp in August 2023, and since then, I've been immersed in the fascinating realm of software development. It's a journey that excites me just as much as creating music does.</p>
        <img src="data:image/jpeg;base64,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" alt="Brandon's Tech Journey" className="mx-auto mb-4 max-w-md" />

        <p className="mb-4">Speaking of which, I'm also releasing new music under the moniker "Former." Our sound is an eclectic blend of nu wave grunge, numetal, progressive metal, and even some hip-hop elements. 2024 promises to be an exciting year as I continue to release fresh tracks while honing my skills in music production and audio engineering, all while coding my way to new horizons.</p>
       
        <p className="mb-4">Join me on this genre-fluid adventure where music and code collide...</p>
       
        <a href="projects" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Check Out My Projects
        </a>
      </section>
    </div>
  );
};

export default AboutMe;