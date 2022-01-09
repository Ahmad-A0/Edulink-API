type Edulink_Login = {
    jsonrpc: string;
    result: {
        method: string;
        success: boolean;
        api_version: number;
        can_create_message_types: [];
        establishment: {
            name: string;
            logo: string;
            effective_date: string;
            demo_date: string;
            rooms: {
                id: string;
                code: string;
                name: string;
            }[];
            year_groups: {
                id: string;
                code: string;
                name: string;
            }[];
            community_groups: {
                id: string;
                name: string;
            }[];
            teaching_groups: {
                id: string;
                name: string;
                employee_id: string;
            }[];
            form_groups: {
                id: string;
                name: string;
                year_group_ids: string[];
                employee_id: string;
                room_id: string;
            }[];
        };
        authtoken: string;
        user: {
            establishment_id: string;
            id: string;
            forename: string;
            surname: string;
            types: string[];
            avatar: {
                photo: string;
                width: number;
                height: number;
            };
        };
        capabilities: {
            data_collection: {
                move_cohabitees: boolean;
            };
            'icalendar.group_import': boolean;
            'communicator.enabled': boolean;
            communicator: {
                parent_identification: {
                    max_priority: string;
                    parental_responsibility: string;
                    options: {
                        max_priority: {
                            '1': string;
                            '2': string;
                            '3': string;
                            '4': string;
                            '5': string;
                            '6': string;
                            '7': string;
                            '8': string;
                            '9': string;
                            '10': string;
                            highest: string;
                            ignore: string;
                        };
                    };
                };
            };
            'communicator.reply_to': boolean;
            'communicator.switchuser': boolean;
            'communicator.select_all': boolean;
            forms: [];
            'communicator.create_message_types': [];
            'communicator.new_message_recipients': [];
            'parentevent.administrator': boolean;
            'parentevent.switchteacher': boolean;
            'marksheets.change_teacher': boolean;
            'resourcebooking.manager': boolean;
            achievement: {
                create: boolean;
            };
            behaviour: {
                create: boolean;
            };
            club: {
                create: boolean;
                export: boolean;
            };
            attendance: {
                today: boolean;
            };
            'homework.create': boolean;
            'homework.learnercreate': boolean;
            'homework.homework_issues': boolean;
            'behaviour_detentionmanagement.session_create': boolean;
            'behaviour_detentionmanagement.hide_learner_add': boolean;
            'calendar.event_create': boolean;
            'calendar.hide_sourcecog': boolean;
            'attendance.absence_management': boolean;
            noticeboard: {
                manager: boolean;
            };
        };
        miscellaneous: {
            upload: {
                chunksize: number;
                max_attachment_size: number;
                max_attachment_size_communicator: number;
                max_body_size_communicator: number;
            };
            max_status_last_visible: number;
            status_interval_background: number;
            student_count_warning: number;
            app: {
                logout_on_pause: boolean;
            };
            editor: {
                defaultfont: string;
            };
        };
        personal_menu: {
            id: string;
            name: string;
            submenu: boolean;
        }[];
        learner_menu: [];
        sub_menu: {
            label: string;
        };
        can_create_messages: boolean;
        login_method: string;
        login_method_change_password: boolean;
        metrics: {
            st: string;
            sspt: number;
            uniqid: string;
        };
    };
    id: string;
};

export default Edulink_Login