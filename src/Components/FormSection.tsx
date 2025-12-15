import React, { ReactNode } from 'react';

interface FormSectionProps {
icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
title: string;
children: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ icon: Icon, title, children }) => {
return (
    <section>
    <div className="flex items-center mb-6">
        <Icon className="text-2xl text-teal-600 mr-3" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    {children}
    </section>
);
};

export default FormSection;