import React from 'react';

const PageText = (props) => {
    let original = props.text;
    let processed = original.split('\n\n\n\n');
    var list = [];
    for(var i = 0; i < processed.length; i++){
        let pagedata = processed[i];
        let processedpagedata = pagedata.split('\n\n\n');
        let pagetitle = processedpagedata[0];
        let pagetext = processedpagedata[1];

        var textlist = []
        if(pagetext == null){
          var changepagetext = []
        } else {
          var changepagetext = pagetext.split('\n');
        }
        for (let i = 0; i < changepagetext.length; i++){
                textlist.push(<p>{changepagetext[i]}</p>);
          }
        list.push(<div className="PageText">
        <h2>{pagetitle}</h2>
        <p>{textlist}</p>
        </div>);
    }
    return(
        <div>
            {list}
        </div>
    );
}

export default PageText;