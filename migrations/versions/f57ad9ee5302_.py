"""empty message

Revision ID: f57ad9ee5302
Revises: 2e98237cafb4
Create Date: 2021-04-09 13:59:00.707607

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f57ad9ee5302'
down_revision = '2e98237cafb4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('album',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('subtitle', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('preview', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_album_name'), 'album', ['name'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_album_name'), table_name='album')
    op.drop_table('album')
    # ### end Alembic commands ###