declare type Edulink_AchievementBehaviourLookups = {
  jsonrpc: string;
  result: {
    method: string;
    success: boolean;
    achievement_types: {
      id: number;
      active: boolean;
      code: string;
      description: string;
      position: number;
      points: number;
      system: boolean;
    }[];
    achievement_activity_types: {
      id: number;
      code: string;
      description: string;
      active: boolean;
    }[];
    achievement_award_types: {
      id: number;
      name: string;
    }[];
    achievement_points_editable: boolean;
    detentionmanagement_enabled: boolean;
    behaviour_types: {
      id: number;
      active: boolean;
      code: string;
      description: string;
      position: number;
      points: number;
      system: boolean;
      include_in_register: boolean;
      is_bullying_type: boolean;
    }[];
    behaviour_activity_types: {
      id: number;
      code: string;
      description: string;
      active: boolean;
    }[];
    behaviour_actions_taken: {
      id: number;
      name: string;
    }[];
    behaviour_bullying_types: {
      id: number;
      name: string;
    }[];
    behaviour_locations: {
      id: number;
      name: string;
    }[];
    behaviour_statuses: {
      id: number;
      name: string;
    }[];
    behaviour_times: {
      id: number;
      name: string;
    }[];
    behaviour_points_editable: boolean;
    behaviour_hidden_fields_on_entry: [];
    achievement_hidden_fields_on_entry: [];
    behaviour_require_fields: [];
    achievement_require_fields: [];
    metrics: {
      st: string;
      sspt: number;
      sspt_us: number;
      uniqid: string;
    };
  };
  id: number;
};
export default Edulink_AchievementBehaviourLookups;
