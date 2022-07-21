import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '../components/Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const FakeAddress = [
  {
    addressId: 1,
    firstName: 'Ronald',
    lastName: 'Swanson',
    streetAddress1: '1234 Alabaster Way #4',
    streetAddress2: '',
    city: 'Nome',
    state: 'AL',
    zipCode: '99762-1234',
    isDefaultShipping: true,
  },
  {
    addressId: 2,
    firstName: 'Ronalds',
    lastName: 'Swanson',
    streetAddress1: '1234 Alabaster Way #4',
    streetAddress2: '',
    city: 'Nome',
    state: 'AL',
    zipCode: '99762-1234',
    isDefaultShipping: false,
  },
  {
    addressId: 3,
    firstName: 'Ronald',
    lastName: 'Swanson',
    streetAddress1: '1234 Alabaster Way #4',
    streetAddress2: '',
    city: 'Nome',
    state: 'AL',
    zipCode: '99762-1234',
    isDefaultShipping: false,
  },
];

const ModalTemplate: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggle} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
        Toggle modal
      </button>
      <Modal {...args} isOpen={isOpen} toggle={toggle}>
        <div>
          {FakeAddress?.[0].firstName} {FakeAddress?.[0].lastName}
        </div>
        <div>{FakeAddress?.[0].streetAddress1}</div>
        <div>{FakeAddress?.[0].streetAddress2}</div>
        <div>
          {FakeAddress?.[0].city}, {FakeAddress?.[0].state}
          {FakeAddress?.[0].zipCode}
        </div>
      </Modal>
    </>
  );
};

// export const Default = ModalTemplate.bind({});
// Default.args = {
//   modalTitle: 'Are you sure?',
//   modalNoButtonText: 'No',
//   modalYesButtonText: 'Yes',
//   isOpen: false,
//   onClick: () => {},
//   setShowModal: () => {},
//   weather: {
//     current: {
//       temp: '',
//       feelsLike: '',
//       humidity: '',
//       windSpeed: '',
//       windDirection: '',
//       uvIndex: '',
//       visibility: '',
//       sunrise: '',
//       sunset: '',
//     },
//     forecast: [
//       {
//         date: '',
//         temp: '',
//         feelsLike: '',
//         humidity: '',
//         windSpeed: '',
//         windDirection: '',
//         uvIndex: '',
//         visibility: '',
//         sunrise: '',
//         sunset: '',
//       },
//     ],
//   },
// };