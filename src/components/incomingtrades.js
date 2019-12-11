import React from 'react';
import * as serverfuncs from '../serverfuncs';
import "./incomingtrades.css";
import Notification from "./notification";
import "./backgroundlogin.css";

class TradeDetails extends HTMLElement {
  index=0;
  numofdetails=0;
  expanded=false;
  constructor() {
    super();
    document.body.className = "background";
  }
}
customElements.define('trade-details', TradeDetails);

class ExpandButton extends HTMLElement {
  index=0;
  constructor() {
    super();
    document.body.className = "background";
  }
}
customElements.define('expand-button', ExpandButton);

function expandTradeDropdown(id) {
  document.getElementById(id).style.height = "200px";
}
function closeTradeDropdown(id) {
  document.getElementById(id).style.height = "35px";
}
var totalTrades = 0;
export default class IncomingTrades extends React.Component {
  constructor(props) {
    super(props);
    //document.body.className = "";
  }

  componentDidMount() {
    this.getIncomingTrades(this);
  }

  async getIncomingTrades(c_ref) {
    for(var i = 0; i < totalTrades; i++) {
      try{
        document.getElementById("trade"+i).remove();
      }
      catch{}
    }
    const trades = await serverfuncs.getTrades();
    const details = await serverfuncs.getTradeDetails();
    totalTrades = 0;
    for(var trade in trades) {
      totalTrades++;

      var auctionNode = document.createElement("trade-details");
      auctionNode.id = "trade"+trade.toString();
      auctionNode.index = trade;
      auctionNode.className = "tradedropdown";
      auctionNode.style.color = "white";
      auctionNode.style.top = (100 + trade * 40).toString()+"px";
      auctionNode.innerHTML = 
      trades[trade].buyer + " trading with " + trades[trade].seller;

      var expandNode = document.createElement("expand-button");
      expandNode.innerHTML = "expand";
      expandNode.className = "expandbutton";
      expandNode.index = trade;
      expandNode.onclick = function () {
        const anode = document.getElementById("trade"+this.index.toString());
        if(anode.expanded) {
          anode.expanded = false;
          closeTradeDropdown(anode.id);
          for(var t = 0; t < totalTrades; t++) {
            console.log(anode.id.slice(5));
            if(t > parseInt(anode.id.slice(5))) {
              try {
              console.log("TRADE SHIFTED");
              console.log(parseInt(document.getElementById("trade"+t.toString()).style.top));
              document.getElementById("trade"+t.toString()).style.top = 
              (parseInt(document.getElementById("trade"+t.toString()).style.top)-170).toString()+"px";
              } catch {}
            }
          }
        }
        else {
          expandTradeDropdown(anode.id);
          for(var t = 0; t < totalTrades; t++) {
            console.log(anode.id.slice(5));
            if(t > parseInt(anode.id.slice(5))) {
              try {
              console.log("TRADE SHIFTED");
              console.log(parseInt(document.getElementById("trade"+t.toString()).style.top));
              document.getElementById("trade"+t.toString()).style.top = 
              (parseInt(document.getElementById("trade"+t.toString()).style.top)+170).toString()+"px";
              } catch {}
            }
          }
          anode.expanded = true;
        }
      };
      auctionNode.append(expandNode);

      var confirmNode = document.createElement("p");
      confirmNode.innerHTML = "confirm";
      confirmNode.className = "confirmbutton";
      confirmNode.onclick = async function() {
        await serverfuncs.approveTrade(trades[trade].tradeid);
        // await serverfuncs.adminCancelTrade(trades[trade].tradeid);
        c_ref.getIncomingTrades(c_ref);
        serverfuncs.showNotification("trade confirmed");
      }
      auctionNode.append(confirmNode);

      var denyNode = document.createElement("p");
      denyNode.innerHTML = "deny";
      denyNode.className = "denybutton";
      denyNode.onclick = async function() {
        await serverfuncs.denyTrade(trades[trade].tradeid);
        c_ref.getIncomingTrades(c_ref);
        serverfuncs.showNotification("trade denied");
      }
      auctionNode.append(denyNode);

      document.getElementById("incomingtrades").append(auctionNode);

      var breakNode = document.createElement("br");
      document.getElementById("trade"+trade.toString()).append(breakNode);

      for(var detail in details) {
        if(details[detail].tradeid === trades[trade].tradeid) {

          var breakNode = document.createElement("br");
          document.getElementById("trade"+trade.toString()).append(breakNode);

          var detailNode = document.createElement("a");
          detailNode.text = details[detail].offer + " >> " +details[detail].buyer;
          document.getElementById("trade"+trade.toString()).append(detailNode);
        }
      }
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div style = {{textAlign: "center "}}>
        <Notification/>
        <a style = {{fontSize:"30px"}}>Incoming Trades</a>
        <div id = "incomingtrades"></div>
      </div>
    )
  }
}