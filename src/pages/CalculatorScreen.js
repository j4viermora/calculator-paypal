import { Layout } from "../components/Layout";
import { Notification } from "../components/Notification";
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

            <div className="row">
            <div className="six columns">
                <Notification />
            </div>
            </div>
        </Layout>
    )
};