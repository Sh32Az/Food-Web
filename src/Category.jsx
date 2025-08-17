import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";
import { GiHamburger } from "react-icons/gi";
const Categories=[
    {
        id:1,
        name:"All",
        image:<TiThSmallOutline className='w-[60px] h-[60px] text-green-600'/>
    }
    ,
    {
        id:2,
        name:"breakfast",
        image:<MdOutlineFreeBreakfast className='w-[60px] h-[60px] text-green-600'/>
    }
    ,
    {
        id:3,
        name:"soups",
        image:<TbSoup className='w-[60px] h-[60px] text-green-600'/>
    }
    ,
    {
        id:4,
        name:"pasta",
        image:<CiBowlNoodles className='w-[60px] h-[60px] text-green-600' />
    }
    ,
    {
        id:5,
        name:"main_course",
        image:<MdOutlineFoodBank className='w-[60px] h-[60px] text-green-600'/>
    }
    ,
    {
        id:6,
        name:"pizza",
        image:<GiFullPizza className='w-[60px] h-[60px] text-green-600'/>
    }
    ,
    {
        id:7,
        name:"burger",
        image:<GiHamburger className='w-[60px] h-[60px] text-green-600'/>
    }
    ,
]
export default Categories