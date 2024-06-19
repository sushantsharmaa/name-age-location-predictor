const getPridictedAge = async (name: string) => {
  const res = await fetch(`https://api-agify.io/?name=${name}`);
  return res.json();
};

const getPridictedGender = async (name: string) => {
  const res = await fetch(`https://api-agify.io/?name=${name}`);
  return res.json();
};

const getPridictedCountry = async (name: string) => {
  const res = await fetch(`https://api-agify.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const ageData = getPridictedAge(params.name);
  const genderData = getPridictedGender(params.name);
  const countryData = getPridictedGender(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <div>
      <div>
        <div>Personal Info</div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Age: {country?.[0].country_id}</div>
      </div>
    </div>
  );
}
