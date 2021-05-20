import CalculateProvider from "./context/CalculateContext"
import { CalculatorScreen } from "./pages/CalculatorScreen"

export const CalculatorApp = () => {
    return (
        <CalculateProvider>
            <CalculatorScreen/>
        </CalculateProvider>
    )
}