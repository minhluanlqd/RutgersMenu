import React, {Component} from "react";
import FoodCard from "../Food/FoodCard";
import axios from 'axios';

// const FoodList = ({campus}) => {

//     const [foodData, setfoodData] = useState([]);

//       useEffect(() => {
//         const fetchData = async () => {
//           const result = await axios.get(`http://localhost:5000/food/${campus}`);
//           setfoodData(result.data.data);
//           console.log(foodData);
//         };
//         fetchData();
//       },[foodData.length])

//     return(
//         <div>
//           {foodData.length?
//               (foodData.map(element => (<FoodCard
//               img={element.img}
//               name={element.name}
//               info={element.info}
//               key={element.key}
//             />)))  : 
//             <div>
//               Loading....
//             </div>
//           }
//         </div>
//         )
//   }
class FoodList extends Component{

  constructor(props){
    super(props);
    this.campus = this.props.campus;
    this.state = {
      foodData : []
    }
    this.local = 'http://localhost:5000';
    this.heroku = 'https://menurutgersbackend.herokuapp.com';
  }
  componentDidMount(){
    axios.get(`${this.heroku}/food/${this.campus}`)
        .then(res => {
          this.setState({foodData: res.data.data});
          console.log(res.data.data);
        })
        .catch(e => {console.log(e)});
  }

  render(){

    return(
      <div>
       {this.state.foodData.length?
              (this.state.foodData.map(element => (<FoodCard
              img={element.img}
              name={element.name}
              info={element.info}
              key={element.key}
            />)))  : 
            <div>
              Loading....
            </div>
        }
      </div>
    )
  }

}


export default FoodList;
