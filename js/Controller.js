class Controller{
    static setup(){
        var taxCalculator
        taxCalculator = new Tax("NZ Tax Calculator", 2020)
        return taxCalculator
    }
}