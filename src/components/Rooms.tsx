import React from 'react';
import RoomCard from './RoomCard';
import { StyledRooms } from '../styles/componentStyles/RoomsStyles';
import { scheds } from '../configs/data';

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
  return (
    <StyledRooms>
      {scheds.map(sched => {
        const { day, subject, teacher, time, code, link } = sched;

        return (
          <RoomCard
            key={subject}
            subject={subject}
            day={day}
            teacher={teacher}
            time={time}
            code={code}
            link={link}
          />
        );
      })}
    </StyledRooms>
  );
};

export default Rooms;
