import React, {FC, useState} from 'react';

export type ManType = {
  name: string
  age: number
  lessons: Array<{title: string}>
  address: {
    street: {
      title: string
    }
  }
}

type PropsType = {
  title: string
  man: ManType
  food: Array<string>
  car: {model: string}
}

function useOlegState(m: string) {
  return [m, function () {}];
}

export const ManComponent: FC<PropsType> = ({title, ...props}) => {
  const [massage, setMessage] = useState<string>('hello');
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {props.car.model}
      </div>
    </div>
  )
}
