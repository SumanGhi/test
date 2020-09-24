import React from 'react'

export default function subCategory() {

    state = {
        selectedTabId: '1'
    }
      
      isActive= (id)=> {
        return this.state.selectedTabId === id;
      }
      
      setActiveTab =(selectedTabId)=> {
        this.setState({ selectedTabId });
      }

    const yes = [1, 2, 3, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div class="container row">
            <div class="col">
                <div class="sub-category">
                    
                    <ul>
                        {yes.map((yes)=>
                        <li className={ this.props.isActive ? 'navigation--active': '' }
                        onClick={ this.props.onActiveTab }>
                            <div>Homeopathic </div><div class="forward"></div>
                        </li>)}
                    </ul> 
                </div>
            </div>

            <div class="col">
                <h1>Yes</h1>
            </div>
        </div>
    )
}
