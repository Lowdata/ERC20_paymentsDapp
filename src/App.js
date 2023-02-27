

function App() {



    //web3js
    
  return (
    <div>
        <div>
            
            <label htmlFor="Connect">   Connect    </label><br />
         <button> CONNECT To Metamask</button>
        </div>
        <hr></hr>
        <div>
            <label> FROM </label><br />
            <input type="Hex"></input><br />
            <label> TO </label><br />
            <input type="Hex"></input><br />
            <button> transfer </button>
        </div>
        <hr></hr>
        <div>
            <label> spender </label><br />
            <input type="Hex"></input><br />

            <label> amount </label><br />
            <input type="Hex"></input><br />
            
            <button> approve </button>
        </div>
        <hr></hr>
        <div>
            <label> available allowance </label>
            <button> allowance</button><br />

            <label> balance in account </label>
            <button> Balance </button>
        </div>
        <hr></hr>
        <div>
            <label> amount </label><br />
            <input type="Hex"></input><br />

            
            <label> to</label><br />
            <input type="Hex"></input><br />

            <button> Transfer from the allowance </button>
        </div>
    </div>
    
    
    
  );
};

export default App;
