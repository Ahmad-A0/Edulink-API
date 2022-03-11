type Edulink_DataCollectionValues = {
  jsonrpc: string;
  result: {
    method: string;
    success: boolean;
    fields: {
      legal_surname: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: string;
        label: string;
      };
      legal_forename: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: string;
        label: string;
      };
      preferred_forename: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: string;
        label: string;
      };
      preferred_surname: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: string;
        label: string;
      };
      date_of_birth: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: string;
        label: string;
      };
      emails: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: {
          address: string;
          location: string;
          main: boolean;
          primary: boolean;
        }[];
        label: string;
      };
      telephones: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: {
          number: string;
          location: string;
          main: boolean;
          primary: boolean;
        }[];
        label: string;
      };
      family_contacts: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: {
          id: number;
          relationship: {
            id: number;
            description: string;
          };
          parental_responsibility: boolean;
          priority: number;
          forename: string;
          surname: string;
          correspondence: boolean;
          main_telephone: boolean;
        }[];
        label: string;
      };
      addresses: {
        type: string;
        category: string;
        read_only: boolean;
        in_review: boolean;
        data: {
          address_id: number;
          apartment: string;
          house_name: string;
          house_number: string;
          street: string;
          district: string;
          town: string;
          county: string;
          post_code: string;
          country_id: number;
          type: string;
        }[];
        label: string;
      };
      dietary_needs: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: {
          id: number;
        }[];
        label: string;
      };
      weekly_meal_pattern: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: {
          day_of_week: string;
          meal_type_id: null | number;
        }[];
        label: string;
      };
      medical_practices: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: [];
        label: string;
      };
      medical_conditions: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: {
          id: number;
        }[];
        label: string;
      };
      disabilities: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: [];
        label: string;
      };
      ethnicity_id: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: number;
        label: string;
      };
      national_identity_id: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: number;
        label: string;
      };
      religion_id: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: any;
        label: string;
      };
      home_language_id: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: number;
        label: string;
      };
      first_language_id: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: number;
        label: string;
      };
      travel_mode_id: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: number;
        label: string;
      };
      route_id: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: number;
        label: string;
      };
      parental_consents: {
        type: string;
        category: string;
        read_only: boolean;
        lookup_key: string;
        in_review: boolean;
        data: {
          id: number;
        }[];
        label: string;
      };
    };
    category_info: {
      Basic: string;
    };
    next_method: string;
    param: {
      learner_id: string;
    };
    metrics: {
      st: string;
      sspt: number;
    };
  };
  id: string;
};

export default Edulink_DataCollectionValues;
