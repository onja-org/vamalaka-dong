import React, {useState} from "react";

import GenericPage from "../GenericPage";
import { RoleSelectOnboard, USER_ROLE } from "../../components/RoleSelectOnboard/RoleSelectOnboard";
import { RegistrationOnboarding } from "../../components/RegistrationOnboarding/RegistrationOnboarding";

export interface OnboardingPageProps {
    isChecked: boolean,
    isPrimary: boolean,
}

export const OnboardingPage: React.FC<OnboardingPageProps> = ({ 
    isChecked,
    isPrimary,
}) => {
    const [selectedRole, setSelectedRole] = useState(USER_ROLE.UNSELECTED);

    function handleClick(userRole: USER_ROLE) {
        setSelectedRole(userRole);
    }
    return (
        <GenericPage>
            {
                selectedRole
                    ? <RegistrationOnboarding 
                        isChecked={isChecked}
                        isPrimary={isPrimary}
                        role={selectedRole}
                     />
                    : <RoleSelectOnboard handleClick={handleClick} />
            }
        </GenericPage>
    )
}