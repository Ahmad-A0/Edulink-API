export declare type LoginReturnType = {
    jsonrpc: string;
    id: string;
    result: {
        api_version: number;
        establishment: {
            logo: string;
            name: string;
            rooms: {
                id: string;
                code: string;
                name: string;
            }[];
            year_groups: {
                id: string;
                name: string;
            }[];
            community_groups: {
                id: string;
                name: string;
            }[];
            discover_groups: {
                id: string;
                name: string;
            }[];
            applicant_admission_groups: {
                id: string;
                name: string;
            }[];
            applicant_intake_groups: {
                id: string;
                name: string;
            }[];
            form_groups: {
                id: string;
                name: string;
                year_groups_ids: string[];
                employee_id: string;
                room_id: string;
            }[];
            teaching_groups: {
                id: string;
                name: string;
                employee_id: string;
                year_group_ids: string[];
            }[];
            subjects: {
                id: string;
                name: string;
                active: boolean;
            };
            report_card_target_types: {
                id: number;
                code: string;
                description: string;
            }[];
        };
        authtoken: string;
        user: {
            establishment_id: number;
            id: string;
            gender: string;
            title: 'object';
            forename: string;
            surname: string;
            types: string[];
            username: string;
            community_group_id: string;
            form_group_id: string;
            year_group_id: string;
            avatar: {
                width: number;
                height: number;
                photo: string;
                cache: string;
            };
            remember_password_permitted: boolean;
        };
        analytics_enabled: [];
        personal_menu: {
            id: string;
            name: string;
        }[];
        learner_menu: [];
        sub_menu: {
            label: string;
        };
        can_create_messages: boolean;
        can_create_message_types: [];
        login_method: string;
        login_method_change_password: boolean;
        capabilities: {
            fcm: {
                remove_old_token: boolean;
            };
            data_collection: {
                move_cohabitees: boolean;
            };
            'icalendar.group_import': boolean;
            'communicator.enabled': boolean;
            communicator: {
                message_reply: boolean;
                email: {
                    html: boolean;
                    attachments: boolean;
                };
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
            forms: {};
            'communicator.create_message_types': [];
            'communicator.new_message_recipients': [];
            'parentevent.administrator': boolean;
            'parentevent.switchteacher': boolean;
            'parentevent.blockslot': boolean;
            'parentevent.video': boolean;
            'marksheets.change_teacher': boolean;
            'resourcebooking.manager': boolean;
            achievement: {
                create: boolean;
            };
            behaviour: {
                create: boolean;
                report_card: {
                    detail: boolean;
                };
            };
            club: {
                create: boolean;
                export: boolean;
            };
            attendance: {
                today: boolean;
            };
            'homework.create': boolean;
            'homework.teaching_group_required': boolean;
            'homework.learnercreate': boolean;
            'homework.homework_issues': boolean;
            'behaviour_detentionmanagement.session_create': boolean;
            'behaviour_detentionmanagement.hide_learner_add': boolean;
            'calendar.event_create': boolean;
            'calendar.hide_sourcecog': boolean;
            'attendance.absence_management': boolean;
            noticeboard: {
                manager: boolean;
                folders: boolean;
            };
        };
        session: {
            expires: number;
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
            session_expiry_modal: number;
            status_interval: number;
            status_in_background: boolean;
            student_count_warning: number;
            app: {
                logout_on_pause: boolean;
            };
            editor: {
                defaultfont: string;
            };
        };
        notice: {
            title: string;
            body: string;
        };
        method: string;
        success: boolean;
        metrics: {
            st: string;
            sspt: number;
            sspt_us: number;
            uniqid: string;
            be: string;
        };
    };
};
export declare type SchoolDetailsReturnType = {
    jsonrpc: string;
    id: string;
    result: {
        establishment: {
            id: number;
            name: string;
            idp_login: string[] | object;
            idp_only: boolean;
            logo: string;
        };
        method: string;
        success: boolean;
        metrics: {
            st: string;
            sspt: number;
            sspt_us: number;
            uniqid: string;
            be: string;
        };
    };
};
