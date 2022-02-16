import Link from "next/link";
import { Padding, PrimaryButton, Text, Title } from "./StyledTags";

export default function DayCareCentre() {
  return (
    <Padding className="flex flex-col items-center">
      <Title className="mt-20">Day Care Centre</Title>
      <Text>
        We are part of Canine Creche UK, we emulate the Mother ship “Suffolk
        Canine Creche”, and follow all their processes, we mirror their award
        winning business model and we have with the best staff to dog ratio of
        any facility.
      </Text>
      <Title>Hundreds of happy hounds have rated us the best in town!</Title>
      <Text>
        We have a bespoke facility designed to be cage free (unkennelled) with
        only your dog in mind. Everything is here, we do not take your dog off
        site or travel to another location, your dogs are safe and secure at all
        times.
      </Text>
      <PrimaryButton className="px-10 pt-3 pb-2">
        <Link href="/day-care-pricing">Day Care Pricing</Link>
      </PrimaryButton>
    </Padding>
  );
}
