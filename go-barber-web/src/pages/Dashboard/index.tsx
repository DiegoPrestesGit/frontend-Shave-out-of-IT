import React, { useState, useCallback } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Appointment,
  Section,
} from './styles';
import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

interface CalerdarModifiers extends DayModifiers {
  available: boolean;
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="http://localhost:3333/files/dc3d92ca67804e895f0c-xqdaleriven.jpg"
                alt="Diegão"
              />
              <strong>Diegão</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/dc3d92ca67804e895f0c-xqdaleriven.jpg"
                  alt="Diegão"
                />
                <strong>Diegão</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="http://localhost:3333/files/dc3d92ca67804e895f0c-xqdaleriven.jpg"
                  alt="Diegão"
                />
                <strong>Diegão</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <Section>
              <strong>Tarde</strong>

              <Appointment>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src="http://localhost:3333/files/dc3d92ca67804e895f0c-xqdaleriven.jpg"
                    alt="Diegão"
                  />
                  <strong>Diegão</strong>
                </div>
              </Appointment>

              <Appointment>
                <span>
                  <FiClock />
                  08:00
                </span>

                <div>
                  <img
                    src="http://localhost:3333/files/dc3d92ca67804e895f0c-xqdaleriven.jpg"
                    alt="Diegão"
                  />
                  <strong>Diegão</strong>
                </div>
              </Appointment>
            </Section>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
