import worksDashboardImage from '../../assets/works-dashboards.png'
import classes from './WorkCard.module.css'

type WorkCardProps = {
    title: string,
    year: number,
    tag: string,
    description: string
}

export default function WorkCard({ 
  title, year, tag, description 
}: WorkCardProps) {
    return (
      <article className={classes.card}>
        <img className={classes.image} src={worksDashboardImage} alt="work image" />
        <div className={classes.content}>
          <h3>{title}</h3>
          <section className={classes.row}>
            <span className={classes.pill}>{String(year)}</span>
            <span className={classes.tag}>{tag}</span>
          </section>
          <p>{description}</p>
        </div>
      </article>
    )
  }