'use client'

import { List, ListItem, ListItemPrefix, ListItemSuffix } from "@material-tailwind/react";

const UsefulLinksCard = () => {
    const careerLinks=[
        {
            title:'Career Guide',
            url:'https://careerguidelinebd.com/'
        },
        {
            title:'Interview tips',
            url:'https://www.elderwisdomcircle.org/?gad=1&gclid=Cj0KCQjw5f2lBhCkARIsAHeTvlghj-6wYrgRHb4mamH7DACNzir6s9ZBIX37USdBq5J2Ztp8nkHpHxIaArb4EALw_wcB'
        },
        {
            title:'Resume writing tips',
            url:'https://www.theflockhouse.com/download-free-editable-resume-templates-word-docx-2022/?gclid=Cj0KCQjw5f2lBhCkARIsAHeTvliZuG4c0QsyXgHdMwFCSzV7IQOyjHLNyW-jHPvPp9oXR0veiAt0p30aAmqDEALw_wcB'
        },
        {
            title:'Cover letter writing',
            url:'https://www.thebalancemoney.com/top-cover-letter-writing-tips-2060304'
        },
        {
            title:'Articles',
            url:'https://zety.com/blog/career-advice'
        },
        {
            title:'Career counselling',
            url:'https://careerguidelinebd.com/'
        }
    ]
    const importants=[
        {
            title:'We follow',
            url:'https://en.wikipedia.org/wiki/Policy'
        },
        {
            title:'Privacy policies',
            url:'https://en.wikipedia.org/wiki/Policy'
        },
        {
            title:'Terms and conditions',
            url:'https://en.wikipedia.org/wiki/Policy'
        },
        {
            title:'FAQ',
            url:'https://en.wikipedia.org/wiki/Policy'
        },
    ]
    return (
        <div className="lg:w-1/4 mx-auto space-y-6">
           <div className="bg-gray-100 w-full">
            <h1 className="text-lg p-2 border-b-2 border-b-blue-700 uppercase text-gray-600">Useful links</h1>
            <List className="my-2 p-0">
   {
    careerLinks?.map((link,i:number)=>
        <a key={i} href={link.url} target="_blank">
                 <ListItem className="group rounded-none py-1.5 px-3 text-sm font-normal border-b text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
{link.title}
        </ListItem>
        </a>
        )
   }
      </List>
           </div>

           {/* second component  */}
           <div className="bg-gray-100 w-full">
            <h1 className="text-lg p-2 border-b-2 border-b-blue-700 uppercase text-gray-600">Importants</h1>
            <List className="my-2 p-0">
   {
    importants?.map((link,i:number)=>
        <a key={i} href={link.url} target="_blank">
                 <ListItem className="group rounded-none py-1.5 px-3 text-sm font-normal border-b text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
{link.title}
        </ListItem>
        </a>
        )
   }
      </List>
           </div>
        </div>
    );
};

export default UsefulLinksCard;