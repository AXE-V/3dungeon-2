export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      collections: {
        Row: {
          creator_id: string;
          id: string;
          model_id: string;
          user_id: string;
        };
        Insert: {
          creator_id: string;
          id: string;
          model_id: string;
          user_id: string;
        };
        Update: {
          creator_id?: string;
          id?: string;
          model_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'collections_creator_id_fkey';
            columns: ['creator_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'collections_model_id_fkey';
            columns: ['model_id'];
            isOneToOne: false;
            referencedRelation: 'models';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'collections_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      likes: {
        Row: {
          model_id: string;
          user_id: string;
        };
        Insert: {
          model_id: string;
          user_id: string;
        };
        Update: {
          model_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'likes_model_id_fkey';
            columns: ['model_id'];
            isOneToOne: false;
            referencedRelation: 'models';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'likes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      models: {
        Row: {
          about: string;
          category: string;
          created_at?: string;
          format: string;
          id?: string;
          license: string;
          rating?: number | null;
          tags: string[];
          title: string;
          user_id: string;
          view_count?: number | null;
          zip_name: string;
        };
        Insert: {
          about: string;
          category: string;
          created_at?: string;
          format: string;
          id?: string;
          license: string;
          rating?: number | null;
          tags: string[];
          title: string;
          user_id: string;
          view_count?: number | null;
          zip_name: string;
        };
        Update: {
          about?: string;
          category?: string;
          created_at?: string;
          format?: string;
          id?: string;
          license?: string;
          rating?: number | null;
          tags?: string[];
          title?: string;
          user_id?: string;
          view_count?: number | null;
          zip_name?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'models_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      users: {
        Row: {
          about: string | null;
          created_at: string;
          id: string;
          image: string | null;
          links: Json | null;
          location: string | null;
          login: string;
          skills: string[] | null;
        };
        Insert: {
          about?: string | null;
          created_at?: string;
          id: string;
          image?: string | null;
          links?: Json | null;
          location?: string | null;
          login: string;
          skills?: string[] | null;
        };
        Update: {
          about?: string | null;
          created_at?: string;
          id?: string;
          image?: string | null;
          links?: Json | null;
          location?: string | null;
          login?: string;
          skills?: string[] | null;
        };
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
  ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
