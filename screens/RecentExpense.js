import ExpenseOutput from "../components/ExpenseOutput/ExpenseOutput";
import { useEffect, useState } from "react";
import { fetchExpenses } from "../utils/httpFirebase";
import { useDispatch, useSelector } from "react-redux";
import { setExpense } from "../store/slices/expenses";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpense = () => {
  const dummyData = useSelector((state)=>state.expenses.expense);
  const dispatch = useDispatch();
  // const [dummyData, setDummyData] = useState(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let component;

  useEffect(()=>{
    const getData = async()=>{
      try {
        setLoading(true);
        const data = await fetchExpenses();
        dispatch(setExpense(data));
        setLoading(false);
        return data;
      } catch (error) {
        setError(true);
      }
    };

    getData();
  }, []);

  if (loading && !error) {
    component = <LoadingOverlay/>
  } else {component = <ErrorOverlay description={"Something Wrong"} onPress={()=>setError(false)}/>}
  
  const recentExpenses = dummyData.filter(item =>{
  const today = new Date();
  const date7DaysAgo = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  const itemDate = new Date(item.date); 
    return itemDate > date7DaysAgo;
  })


  
  return !loading ? <ExpenseOutput expensesPeriod={"Last 7 days"} expenses={recentExpenses}/> : component;
};

export default RecentExpense;
