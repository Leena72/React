import React, {Component} from 'react';
import './Products.css';

class Products extends Component
{
    render()
    {
        return(
            <div className="Products">
                <h2>BRANDS IN FOCUS</h2>
                <h5>Show some brand love</h5>

                <div className="cards">
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/3/a5c4e943-e8e1-4ecd-b2ba-fcf076aa4e831554289323095-BIF-HRX.jpg" alt="card" />
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/c34a9962-9d5a-4256-b2df-6d0c5ca73fd41554112439570-3eb1f363-9eb2-4c1e-b39e-2809375dd5da1553509151232-Esprit-Forever-New-Tomst-_AHPMB_BF.jpg" alt="card" />
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/2/3605d33b-e046-4820-b4f7-875b0c2a93021554196462621-Mufti---JNS_Wrangler---JNS_AHPMB_AR9.jpg" alt="card" />
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/875962a3-bb60-4607-b061-91ab8b6c40d31554112554946-f80de2d4-004f-4899-8a6c-2db9035419a11553584343888-Crocs_-AHPMB_AR.jpg" alt="card" />
                </div>

                <div className="cards">
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/3/5e61da22-cdbf-4ef6-9f2b-402c0cf115ec1554285571709-Flying-Machine---Killer---AHPMB_B.jpg" alt="card" />
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/ca86fa09-0dba-4992-aa68-4de17849c5ff1554111839382-Vareesha_AHPMB_B.jpg" alt="card" />
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/2/1b05cd28-3e40-4d5c-8b19-9e3f619e87351554204764595-Global-Desi---Upto-60--Off_AHPMB_BF8-_NAYo_AHPMB_BF.jpg" alt="card" />
                    <img src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/4/1/0d9f226b-5173-4f9b-b18e-e1e812ed131b1554112866811-8af57756-d8bb-4398-9470-6f9db066c8e51553679570554-American-Tourister_AHPMB_B.jpg" alt="card" />
                </div>
            </div>
        );
    }
}

export default Products;