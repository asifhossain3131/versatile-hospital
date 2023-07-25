'use client'

import { Card, Typography } from "@material-tailwind/react";

const DiagnosticTable = ({TABLE_ROWS}:any) => {
    const TABLE_HEAD = ["Test Name", "Cost", "Discount", "Total"];
    type TableData={
        testName:string
        price:number
    }
    return (
        <Card className="w-full h-full overflow-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-800 text-white p-4">
                <Typography
                  variant="small"
                  className="font-normal leading-none "
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ testName, price }:TableData, index:number) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {testName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    ${price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                   {price>600? '30%' : '25%'}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue" className="font-medium">
                  ${price>600? Math.floor(price-price*0.30):Math.floor( price-price*0.25)}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    );
};

export default DiagnosticTable;