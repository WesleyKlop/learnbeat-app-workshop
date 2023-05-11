/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TrainingListsService {

    /**
     * Get word lists
     * Get all word lists for the current user
     * @returns any Success
     * @throws ApiError
     */
    public static getTraininglists(): CancelablePromise<Array<{
        id?: number;
        name?: string;
        type?: string;
        image?: string;
        user_id?: number;
        share_level?: number;
        level_id?: number;
        grade_id?: number;
        left_column_name?: string;
        right_column_name?: string;
        created_at?: string;
        updated_at?: string;
        is_deleted?: number;
        course_name?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/traininglists',
        });
    }

    /**
     * Get words for list id
     * Get all words from the provided word list id
     * @param listId
     * @returns any Success
     * @throws ApiError
     */
    public static getTraininglistsWords(
        listId: number,
    ): CancelablePromise<Array<{
        id?: number;
        left_value?: string;
        right_value?: string;
        training_list_id?: number;
        created_at?: string;
        updated_at?: string;
        is_deleted?: number;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/traininglists/{list_id}/words',
            path: {
                'list_id': listId,
            },
        });
    }

    /**
     * Get sessions for list id
     * Get all sessions from the provided word list id
     * @param listId
     * @returns any Success
     * @throws ApiError
     */
    public static getTraininglistsSessions(
        listId: number,
    ): CancelablePromise<Array<{
        id?: number;
        learn_direction?: string;
        training_list_id?: number;
        created_at?: string;
        finished_at?: string;
        type?: string;
        user_id?: number;
        time_last_response?: string;
        activity_id?: number;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/traininglists/{list_id}/sessions',
            path: {
                'list_id': listId,
            },
        });
    }

    /**
     * Get responses for a list / session
     * Get all responses from a list id / session id combination
     * @param listId
     * @param sessionId
     * @returns any Success
     * @throws ApiError
     */
    public static getTraininglistsSessionsResponses(
        listId: number,
        sessionId: number,
    ): CancelablePromise<Array<{
        id?: number;
        training_list_word_id?: number;
        response?: string;
        score?: number;
        training_list_session_id?: number;
        amount_of_tries?: number;
        created_at?: string;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/traininglists/{list_id}/sessions/{session_id}/responses',
            path: {
                'list_id': listId,
                'session_id': sessionId,
            },
        });
    }

}
