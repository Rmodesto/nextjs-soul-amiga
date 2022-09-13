export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return <div>Hello world!</div>;
};

export default BaseTemplate;
