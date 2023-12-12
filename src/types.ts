interface UserEmployment {
    title: string;
    key_skill: string;
}

interface UserAddress {
    city: string;
    street_name: string;
    street_address: string;
    zip_code: string;
    state: string;
    country: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

interface UserSubscription {
    plan: string;
    status: string;
    payment_method: string;
    term: string;
}

interface User {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    gender: string;
    phone_number: string;
    social_insurance_number: string;
    date_of_birth: string;
    employment: UserEmployment;
    address: UserAddress;
    credit_card: {
        cc_number: string;
    };
    subscription: UserSubscription;
}

interface Style {
    backgroundColor: string;
    primaryColor: string;
    textColor: string;
    textSize: string;
}


export type { UserEmployment, UserAddress, UserSubscription, User, Style };