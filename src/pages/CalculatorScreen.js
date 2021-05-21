import { Layout } from "../components/Layout";
import { ToReceived } from "../components/ToReceived";
import { ToSend } from "../components/ToSend";


export const CalculatorScreen =( props ) => {
   
    return(
        <Layout>
            <div className="row">
                <div className="six columns">
                    <ToSend/>
                </div>

                <div className="six columns">
                    <ToReceived/>
                </div>
            </div>
        </Layout>
    )
};