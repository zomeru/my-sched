import React from 'react';
import { StyledRoomCard } from '../styles/componentStyles/RoomCardStyles';
import { DayType } from '../typings/types';
interface RoomCardProps {
  day: DayType;
  subject: string;
  teacher: string;
  time: string;
  code: string;
  link: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  day,
  subject,
  teacher,
  time,
  code,
  link,
}) => {
  return (
    <StyledRoomCard>
      <div className='subject'>
        <h2 className='day'>{day}</h2>
        <h3>{subject}</h3>
      </div>
      <div className='class-info'>
        <p className='teacher'>{teacher}</p>
        <p className='time'>{time}</p>
        <p className='code'>Team Code: {code}</p>
      </div>

      <a href={link} target='_blank' rel='noreferrer'>
        <div className='button-link'>
          <p>JOIN TEAM</p>
        </div>
      </a>
    </StyledRoomCard>
  );
};

export default RoomCard;
