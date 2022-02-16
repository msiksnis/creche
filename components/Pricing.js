import { Padding, Text, Title } from "./StyledTags";

export default function Pricing() {
  return (
    <Padding className="mt-20 flex flex-col xl:items-center">
      <Title>PRICES FOR DAY CARE (inclusive of VAT)</Title>
      <h2 className="mt-6 -mb-4 text-lg lg:mt-10 xl:w-4/5">Half Day £19.20</h2>
      <Text className="flex justify-center">
        The crossover period is between 12 noon and 1pm - we will advise at
        registration whether we can take your dog during the morning or
        afternoon, if your dog has high energy levels you will only be able to
        send them in the morning, as the afternoon does command a slower pace
      </Text>
      <h2 className="-mt-4 flex text-lg lg:mt-0 xl:w-4/5">
        Full Day £28.50
        <p className="ml-2 text-gray-600">(open for ten hours!)</p>
      </h2>
      <Title className="mt-20">PACKAGES</Title>
      <h2 className="mt-4 -mb-4 text-lg lg:mt-6 xl:w-4/5">20 days</h2>
      <Text>
        Prepaid In Advance £485.00 take your prepaid days whenever you like
      </Text>
      <div className="mb-20 flex flex-col -space-y-5 xl:items-center">
        <Text>
          We have many packages and payment plans available that reduce your
          cost per day
        </Text>
        <Text>
          Cancellations must be made with 24 hours notice or we reserve the
          right to charge you for that day. We can accommodate most requests, if
          we do not have what you want listed, just ask, we can probably help
          you. 🐾
        </Text>
      </div>
    </Padding>
  );
}
