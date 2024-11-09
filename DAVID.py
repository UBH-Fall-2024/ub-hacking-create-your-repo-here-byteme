
tax = 0
def applyTax(state):
    if state=="Alabama":
        tax = 1.04
    elif state=="Alaska":
        tax = 1
    elif state=="Arizona":
        tax = 1.056
    elif state=="Arkansas":
        tax = 1.065
    elif state=="California":
        tax = 1.0725
    elif state=="Colorado":
        tax = 1.029
    elif state=="Conneticut":
        tax = 1.0635
    elif state=="Delaware":
        tax = 1
    elif state=="District of Columbia":
        tax = 1.0575
    elif state=="Florida":
        tax = 1.06
    elif state=="Georgia":
        tax = 1.04
    elif state=="Hawaii":
        tax = 1.04
    elif state=="Idaho":
        tax = 1.06
    elif state=="Illinois":
        tax = 1.0625
    elif state=="Indiana":
        tax = 1.07
    elif state=="Iowa":
        tax = 1.06
    elif state=="Kansas":
        tax = 1.065
    elif state=="Kentucky":
        tax = 1.06
    elif state=="Louisiana":
        tax = 1.0445
    elif state=="Maine":
        tax = 1.055
    elif state=="Maryland":
        tax = 1.06
    elif state=="Massachusetts":
        tax = 1.0625
    elif state=="Michigan":
        tax = 1.06
    elif state=="Minnesota":
        tax = 1.0688
    elif state=="Mississippi":
        tax = 1.07
    elif state=="Missouri":
        tax = 1.0423
    elif state=="Montana":
        tax = 1
    elif state=="Nebraska":
        tax = 1.055
    elif state=="Nevada":
        tax = 1.046
    elif state=="New Hampshire":
        tax = 1
    elif state=="New Jersey":
        tax = 1.0663
    elif state=="New Mexico":
        tax = 1.0513
    elif state=="New York":
        tax = 1.04
    elif state=="North Carolina":
        tax = 1.0475
    elif state=="North Dakota":
        tax = 1.05
    elif state=="Ohio":
        tax = 1.0575
    elif state=="Oklahoma":
        tax = 1.045
    elif state=="Oregon":
        tax = 1
    elif state=="Pennsylvania":
        tax = 1.06
    elif state=="Puerto Rico":
        tax = 1.06
    elif state=="Rhode Island":
        tax = 1.07
    elif state=="South Carolina":
        tax = 1.06
    elif state=="South Dakota":
        tax = 1.045
    elif state=="Tennessee":
        tax = 1.07
    elif state=="Texas":
        tax = 1.0625
    elif state=="Utah":
        tax = 1.047
    elif state=="Vermont":
        tax = 1.06
    elif state=="Virginia":
        tax = 1.043
    elif state=="Washington":
        tax = 1.065
    elif state=="Washington, D.C.":
        tax = 1.06
    elif state=="West Virginia":
        tax = 1.06
    elif state=="Wisconsin":
        tax = 1.05
    elif state=="Wyoming":
        tax = 1.05

def priceCalc(base,tax):
    applyTax(state)
    return round(base*tax,2)

